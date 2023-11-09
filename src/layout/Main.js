import Reacts from 'react';
import NewsletterBox from '../component/NewsletterBox';
import ProfileListBox from '../component/ProfileListBox';

function Main() {
    return (
        <div className="main">
            <div className="container">
                <ProfileListBox />
                <NewsletterBox />
            </div>
        </div>
    );
}

export default Main;
