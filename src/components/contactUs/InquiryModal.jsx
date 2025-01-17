import React, { useState } from 'react';
import { ContactUsModalBox } from '../../assets/styles/contactUs/contactUsModal.styled';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const InquiryModal = ({ setModalStatus }) => {
  let [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    if (e.target.value.length <= 500) {
      setInputCount(e.target.value.length);
    }
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('문의가 완료되었습니다.');
          setModalStatus(false);
        },
        (error) => {
          alert('문의에 실패하였습니다. 다시 시도해 주세요!');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <ContactUsModalBox>
      <div className="modalBackground"></div>
      <div className="modalContainer">
        <div className="inquiryContainer">
          <p className="inquiryTitle NanumSquareEB">문의하기</p>
          <img
            className="xBtn"
            onClick={() => setModalStatus(false)}
            src={`${process.env.PUBLIC_URL}/assets/images/contact/x.png`}
            alt=""
          />
          <hr />
          <form ref={form} onSubmit={sendEmail}>
            <div className="inquiryInfos NanumSquareB">
              <p>
                <span className="dot">·</span>&nbsp;이름/업체명
              </p>
              <input
                type="text"
                placeholder="이름/업체명을 입력해주세요."
                name="user_name"
                required
              />
            </div>
            <div className="inquiryInfos NanumSquareB">
              <p>
                <span className="dot">·</span>&nbsp;연락처
              </p>
              <input
                type="text"
                placeholder="번호를 입력해주세요. ( ‘-’없이 입력 )"
                name="user_phoneNumber"
                required
              />
            </div>
            <div className="inquiryInfos NanumSquareB">
              <p>
                <span className="dot">·</span>&nbsp;이메일
              </p>
              <input type="text" placeholder="이메일을 입력해주세요." name="user_email" required />
            </div>
            <div className="inquiryInfos inquiryContent NanumSquareB">
              <p>
                <span className="dot">·</span>&nbsp;문의내용
              </p>
              <textarea
                onChange={onInputHandler}
                placeholder="문의하실 내용을 입력해주세요."
                name="user_inquiry"
                maxLength={500}
                required
              ></textarea>
              <span className="textLimit">{inputCount} / 500</span>
            </div>
            <div className="inquiryBtn">
              <button className="NanumSquareB">문의하기</button>
            </div>
          </form>
        </div>
      </div>
    </ContactUsModalBox>
  );
};

export default InquiryModal;
