import { render } from '@testing-library/react';
import App from '../App';


describe('Renderizando elementos na tela', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const texto = getByText(
      'Easily create or join a local nanny share with Hapu'
    );
    expect(texto).toBeInTheDocument();
  });

  it.only()
})