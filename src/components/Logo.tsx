import logo from '@/assets/svg/logo.svg';

export function Logo() {
    return (
      <div
        style={{
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <a href="/">
          <img src={logo} height={64} width={64} alt="logo" />
        </a>
      </div>
    );
  }