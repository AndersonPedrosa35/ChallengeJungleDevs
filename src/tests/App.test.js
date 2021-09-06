import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
});

describe('Renderiza os elementos da seção de Demonstração da HomePage', () => {
  it('Verifica o texto sobre o produto', () => {
    const { getByRole, getByTestId } = render(<App />);

    const paragraph = getByTestId('paragraph');
    const title = getByRole('heading', {
      level: 1,
    });

    expect(paragraph).toHaveTextContent('You have');
    expect(title).toHaveTextContent('Share your home');
  });
  it('Verifica a imagem da seção de Descrição da HomePage', () => {
    const { getByAltText } = render(<App />);

    const img = getByAltText('funcionamento do Nani Share');

    expect(img).toBeInTheDocument();
  });
});

describe('Renderiza a calculadora de preços', () => {
  it('Verifica os inputs da calculadora', () => {
    const { getAllByTestId } = render(<App />);

    const inputs = getAllByTestId('input-cal');
    expect(inputs[0]).toBeInTheDocument();
    expect(inputs[1]).toBeInTheDocument();
  });

  it('Aplica ação a calculadora', () => {
    jest.fn
    const { getAllByTestId, getByRole } = render(<App />);

    const inputs = getAllByTestId('input-cal');
    const button = getByRole('button', {
      name: 'Calculate'
    });

    console.log(inputs);

    userEvent.type(inputs[0], 2);
    userEvent.type(inputs[1], 2);
    userEvent.click(button);


    const span = getByRole('listitem');

    expect(span).toHaveTextContent(25);
  });
});

describe('Renderiza a seção de demonstração do App', () => {
  const { getByAltText } = render(<App />);

  const img = getByAltText('framework');

  expect(img).toBeInTheDocument();
})