import minhaImagem from '../../img/logoLogus.png';

export default function Logo(props) {
    return (
        <div>
            <img src={minhaImagem} alt="Logo" {...props} />
        </div>
    );
}
