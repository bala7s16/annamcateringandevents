import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="service-card">
            <div className="service-icon">
                <Icon size={32} />
            </div>
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{description}</p>
        </div>
    );
};

export default ServiceCard;
