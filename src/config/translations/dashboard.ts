import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const dashboard = createI18n(provider, {
  en: {
    pricing: 'Pricing',
    learn_more: 'Learn More',
    invite: {
      title: 'Invite Amina',
      description: 'Add Amina to your Discord server with one click',
      bn: 'Invite now',
    },
    servers: {
      title: 'Select Server',
      description: 'Select the server to configure',
    },
    vc: {
      create: 'Create a voice channel',
      'created channels': 'Created Voice channels',
    },
    command: {
      title: 'Command Usage',
      description: 'Use of commands of your server',
    },
  },
  cn: {
    pricing: '價錢',
    learn_more: '了解更多',
    invite: {
      title: '邀請 Amina',
      description: '一鍵將 Amina 添加到您的 Discord 服務器',
      bn: '現在邀請',
    },
    servers: {
      title: '選擇服務器',
      description: '自定義您的服務器',
    },
    vc: {
      create: '創建語音通道',
      'created channels': '已創建語音頻道',
    },
    command: {
      title: '命令使用量',
      description: '使用你的服務器命令使用量',
    },
  },
  ja: {
    pricing: '料金プラン',
    learn_more: '詳しく見る',
    invite: {
      title: 'Amina を招待',
      description: 'ワンクリックで Amina をサーバーに追加',
      bn: '今すぐ招待',
    },
    servers: {
      title: 'サーバーを選択',
      description: '設定するサーバーを選んでください',
    },
    vc: {
      create: 'ボイスチャンネルを作成',
      'created channels': '作成済みボイスチャンネル',
    },
    command: {
      title: 'コマンド使用状況',
      description: 'サーバーでのコマンド使用履歴',
    },
  },
});
