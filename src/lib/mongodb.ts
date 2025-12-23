/**
 * MongoDB Connection
 * ==================
 * Singleton MongoDB client for serverless environments.
 * Reuses connections across requests to avoid connection pool exhaustion.
 */

import { MongoClient, type MongoClientOptions } from 'mongodb';

// Validate at runtime when connecting
function validateMongoUri(): string {
  const uri = process.env.MONGO_CONNECTION || '';
  if (!uri) {
    throw new Error('Missing MONGO_CONNECTION environment variable');
  }
  return uri;
}

// Global type declaration for connection caching
declare global {
  // eslint-disable-next-line no-var
  var mongoConnection: {
    client: MongoClient | null;
    promise: Promise<MongoClient> | null;
  } | null;
}

// Initialize global cache
if (!global.mongoConnection) {
  global.mongoConnection = { client: null, promise: null };
}

/**
 * Connect to MongoDB with connection pooling
 * Singleton pattern for serverless environments
 */
export async function connectDB(): Promise<MongoClient> {
  if (global.mongoConnection?.client) {
    return global.mongoConnection.client;
  }

  if (!global.mongoConnection?.promise) {
    const uri = validateMongoUri();
    const options: MongoClientOptions = {
      maxPoolSize: 10,
      minPoolSize: 2,
      maxIdleTimeMS: 30000,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    global.mongoConnection!.promise = new MongoClient(uri, options)
      .connect()
      .then((client) => {
        console.log('MongoDB connected successfully');
        return client;
      });
  }

  try {
    global.mongoConnection!.client = await global.mongoConnection!.promise;
  } catch (e) {
    global.mongoConnection!.promise = null;
    console.error('MongoDB connection error:', e);
    throw e;
  }

  return global.mongoConnection!.client;
}

/**
 * Get the default database from the connection string
 */
export async function getDb() {
  const client = await connectDB();
  return client.db();
}
