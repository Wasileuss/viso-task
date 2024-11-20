const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container" style={{ borderTop: '1px solid orange' }}>
                <h4 className="footer__text">
                    <span>Created by &copy;</span> 
                    <a href={process.env.NEXT_AUTHOR_URL} target="_blank" rel="noreferrer noopener">{process.env.NEXT_PUBLIC_AUTHOR}</a>
                </h4>
            </div>
        </footer>
    );
};

export {Footer};