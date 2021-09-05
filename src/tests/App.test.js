import { render } from '@testing-library/react';
import App from '../App';


describe('Renderizando elementos do Hero na HomePage', () => {
  it('Verifica o texto no hero', () => {
    const { getByText } = render(<App />);
    const texto = getByText(
      'Create the childcare you need at a price you can afford'
    );
    expect(texto).toBeInTheDocument();
  });

  it('Verifica a barra header com os menu', () => {
    const { getAllByRole } = render(<App />);

    const link = getAllByRole('link');
    expect(link[0]).toHaveTextContent('Create Your Nanny Share');
    expect(link[1]).toHaveTextContent('Browse Shares');
    expect(link[2]).toHaveTextContent('Our Story');
  });

  it('Verifica se renderiza a image no model de Cadastro/login', () => {
    const { getByAltText } = render(<App />);

    const img = getByAltText('Login');

    expect(img).toBeInTheDocument();
  });

  it('Verifica os inputs de login do Model de Cadastro/Login', () => {
    const { getAllByPlaceholderText } = render(<App />);

    const inputs = getAllByPlaceholderText('E-mail');
    expect(inputs[0].type).toBe('email');
    expect(inputs[1].type).toBe('email');
  });

  it('Verifica os inputs de password do Model de Cadastro/Login', () => {
    const { getAllByPlaceholderText } = render(<App />);

    const inputs = getAllByPlaceholderText('Password');
    expect(inputs[0].type).toBe('password');
    expect(inputs[1].type).toBe('password');
  });

  it('')
})