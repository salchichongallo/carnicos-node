import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Button, Card, Input, Label, Title, Subtitle } from '@carnicos/ui';

type Props = {
  onLogin?: (credentials: object) => unknown;
};

const Header = styled.header`
  margin-bottom: 40px;
`;

const Form = styled(Card)`
  width: 100%;
  max-width: 380px;
  padding: 40px;

  background: #fff;

  > ${Label} {
    margin-top: 30px;
  }

  > ${Button} {
    min-height: 50px;
    margin-top: 40px;
  }
`;

type AllProps = React.FormHTMLAttributes<HTMLFormElement> & Props;

class LoginCard extends PureComponent<AllProps> {
  private readonly emailRef = React.createRef<HTMLInputElement>();

  private readonly passRef = React.createRef<HTMLInputElement>();

  private getProps(): any {
    const { onLogin, ...props } = this.props;
    return props;
  }

  private onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    if (this.props.onSubmit) {
      return this.props.onSubmit(event);
    }

    if (this.props.onLogin) {
      event.preventDefault();
      this.props.onLogin(this.pickCredentials());
    }
  };

  private pickCredentials() {
    return {
      email: this.emailRef.current!.value,
      password: this.passRef.current!.value,
    };
  }

  public render() {
    return (
      <Form as="form" {...this.getProps()} onSubmit={this.onSubmit as any}>
        <Header>
          <Title>Iniciar Sesión</Title>
          <Subtitle secondary>Cárnicos y embutidos</Subtitle>
        </Header>

        <Label>
          Email
          <Input ref={this.emailRef as any} name="email" type="email" />
        </Label>

        <Label>
          Contraseña
          <Input ref={this.passRef as any} name="password" type="password" />
        </Label>

        <Button wide primary type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    );
  }
}

export default LoginCard;
