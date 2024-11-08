import './index.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="NotFound">
      <img src="/assets/images/odc-min.png" alt="" />
      <h1>404</h1>
      <p>Página Não Encontrada</p>
      
      
      <Link to="/">
      Voltar para a página inicial
      </Link>
    </div>
  );
}
