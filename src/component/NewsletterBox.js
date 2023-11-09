import axios from 'axios';
import '../css/App.css';
import '../css/common.css';
import icn1 from '../images/icn-paperplane.png';
import { useEffect, useState, useRef } from 'react';

function NewsletterBox() { 
    const ref = useRef();
    const [bgImage, setBgImage] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [emailValText, setEmailValText] = useState('');

    useEffect(() => {
        let saveImage = localStorage.getItem('bgImage');
         
        if (!saveImage) {// 처음 호출 시
            fetchApiImage();
        } 
        else {
            setBgImage(saveImage); //localStorage에 이미지 url 저장
        }
    }, []);
    // unsplash api 호출 
    const fetchApiImage = async () => {
        await axios
            .get('https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM')
            .then(res => {
                const imageUrl = res.data.urls.full;
                setBgImage(imageUrl);
                localStorage.setItem('bgImage', imageUrl);
            }).catch(error => {
                console.log('fetchApiImage Error:', error);
            });
    }
    const emailVaildChk = (e) => {
        const _value = e.target.value;
        const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const validChk = regExp.test(_value);

        setEmailVal(validChk);
        setEmailValText(_value)
    }
    const mailSubmit = (e) => {
        e.preventDefault();

        if (emailValText && emailVal) {
            alert(`${emailValText}로 뉴스레터 등록 되었습니다.`);
            setEmailValText('');
        }else if(emailValText == ''){
            alert('메일 주소를 입력해 주세요.');
        }
        else {
            alert('유효한 메일 주소가 아닙니다.');
            ref.current.focus();
        }
    };
    return (
        <section className="sec02" style={{ backgroundImage: `url(${bgImage})` }}>
            <h2 className="h2">Sed ut perspiciatis unde omnis</h2>
            <div className="conts">
                There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't look even slightly believable. 
                If you are going to use a passage of Lorem Ipsum, 
                you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
            </div>
            <p className='sub'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
                by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
                you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
            </p>
            <div className="newsletter-wrap">
                <h3 className="h3">Subscribe to our newsletter</h3>
                <form onSubmit={mailSubmit}>
                    <div className="email-input-container">
                        <div className={`email-input-wrap ${emailValText == '' ? '' : !emailVal? 'is-err' : 'is-pass'}`}>
                            <input type="email" name="email" value={emailValText} ref={ref} onChange={emailVaildChk} className="email-input" placeholder="Enter your email"/>
                            <button type="submit" className="send-btn">
                                <img src={icn1} alt="메일 전송" className="icn-paperplane"/>
                            </button>
                            <p className="text-err">Please enter a valid email!</p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default NewsletterBox;
