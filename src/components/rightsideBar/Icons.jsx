import '../middle../../../scss/App.scss';

export function Icons (props){
    const {icon_1,icon_2, icon_3, icon_4, icon_5, icon_6} = props;
    return (
        <div className="icons">
            <div className="home">
                <img src={icon_1} alt="" className="activeHome" />
            </div>
            <div className="iconWrapper">
                <img src={icon_2} alt="" className="activeIcons" />
            </div>

            <div className="iconWrapper">
                <img src={icon_3} alt="" className="activeIcons" />
            </div>

            <div className="iconWrapper">
                <img src={icon_4} alt="" className="activeIcons" />
            </div>
            <div className="iconWrapper">
                <img src={icon_5} alt="" className="activeIcons" />
            </div>

            <div className="iconWrapper">
                <img src={icon_6} alt="" className="activeIcons" />
            </div>
        </div>

    )
}