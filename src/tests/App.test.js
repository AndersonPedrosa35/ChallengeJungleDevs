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

  it('Verifica o model de Cadastro/login', () => {
    
  })
})