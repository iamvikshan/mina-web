import { Field, Flex, Spacer, Text } from '@chakra-ui/react';
import type { FieldRootProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import {
  Controller,
  ControllerProps,
  FieldValues,
  Path,
  UseControllerProps,
} from 'react-hook-form';

export function Form(props: FieldRootProps) {
  return (
    <Field.Root asChild {...props}>
      <Flex
        direction="column"
        bg="CardBackground"
        rounded="3xl"
        p={5}
        boxShadow="normal"
      >
        {props.children}
      </Flex>
    </Field.Root>
  );
}

export type FormCardProps = {
  required?: boolean;
  baseControl?: FieldRootProps;
  /**
   * Show an error message if not null
   */
  error?: string;
  label?: string | ReactNode;
  description?: string | ReactNode;

  children: ReactNode;
};

export function FormCard({
  label,
  description,
  required,
  baseControl,
  children,
  error,
}: FormCardProps) {
  return (
    <Form required={required} invalid={error != null} {...baseControl}>
      {label && (
        <Text fontSize={{ base: '16px', md: 'lg' }} fontWeight="medium" mb={0}>
          {label}
        </Text>
      )}
      <Text fontSize={{ base: 'sm', md: 'md' }} color="TextSecondary">
        {description}
      </Text>
      <Spacer mt={2} />
      {children}
      {error && (
        <Text color="red.500" fontSize="sm" mt={1}>
          {error}
        </Text>
      )}
    </Form>
  );
}

export type FormCardControllerProps<
  TFieldValue extends FieldValues,
  TName extends Path<TFieldValue>,
> = {
  control: Omit<FormCardProps, 'error' | 'children'>;
  controller: UseControllerProps<TFieldValue, TName>;
  render: ControllerProps<TFieldValue, TName>['render'];
};

export function FormCardController<
  TFieldValue extends FieldValues,
  TName extends Path<TFieldValue>,
>({
  control,
  controller,
  render,
}: FormCardControllerProps<TFieldValue, TName>) {
  return (
    <Controller
      {...controller}
      render={(props) => (
        <FormCard {...control} error={props.fieldState.error?.message}>
          {render(props)}
        </FormCard>
      )}
    />
  );
}
