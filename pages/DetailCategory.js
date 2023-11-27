import { useLocation } from 'react-router-dom';
import './detail.css';

export default function Detail() {

    const { state } = useLocation();
    const itemData = state && state.itemData;



    if (!itemData) {
        return <div>Data not found</div>;
    }

    return (
        <div className='detail'>

            <div className="detail-container">
                <img className="detail-image" src={itemData.thumbnail} alt={itemData.title} />
                <div className='detail-wrapper'>
                    <h1 className="detail-title">{itemData.title}</h1>
                    <p className="detail-description">Genre: {itemData.genre}</p>
                    <p className="detail-description">Platform: {itemData.platform}</p>
                    <p className="detail-genre">Description: {itemData.short_description}</p>
                    <p className="detail-genre">Publisher: {itemData.publisher}</p>
                    <p className="detail-genre">Developer: {itemData.developer}</p>
                </div>

            </div>
        </div>

    );
}