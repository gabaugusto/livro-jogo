
export default function Header(props) {

    return (
        <div className="header">
            <div className="container">
                Header
                {props.children}
            </div>
        </div>
    );
};