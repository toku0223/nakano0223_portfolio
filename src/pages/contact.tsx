import { mailSystem } from '@/config/firebase';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleClick = async () => {
    const result = await mailSystem(name, email, subject, message);
    console.log(
      '🚀 ~ file: CreateUser.js ~ line 13 ~ handleClick ~ result',
      result
    );
    if (result) {
      setSuccess('メールを送信しました。');
    } else {
      setError(
        'エラーが発生しました。<br />ページを更新してもう一度ご入力ください。'
      );
    }
  };

  return (
    <Layout>
      <div className="text-black flex flex-col items-center mb-12">
        <h2 className="contact_h2">CONTACT</h2>
        <h3 className="page1_top_h3">お問い合わせ</h3>
      </div>

      <div className="contact_align">
        <div></div>
        <div className="contact_form">
          <label
            htmlFor="name"
            className="contact_label"
            style={{ color: '#004673' }}
          >
            お名前
          </label>
          <input
            type="name"
            id="name"
            value={name}
            className="contact_input py-2"
            placeholder="例：山田 太郎"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="contact_form">
          <label
            htmlFor="email"
            className="contact_label"
            style={{ color: '#004673' }}
          >
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className="contact_input"
            placeholder="xxxxxxxx@xxx.xx"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contact_form">
          <label
            htmlFor="subject"
            className="contact_label"
            style={{ color: '#004673' }}
          >
            件名
          </label>
          <input
            type="subject"
            id="subject"
            value={subject}
            className="contact_input"
            placeholder="タイトル"
            required
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="contact_form">
          <label
            htmlFor="message"
            className="contact_label"
            style={{ color: '#004673' }}
          >
            本文
          </label>
          <textarea
            id="message"
            value={message}
            className="contact_input"
            placeholder="本文"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center">
          <button onClick={handleClick} className="page4_button">
            送信
          </button>
          <div>
            {success}
            {error}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center mt-16">
        <h2>
          LINEからもご相談を承っております。
          <br />
          公式LINEはコチラ
        </h2>
        <h2 className="contact_h2">Nakano Web</h2>
        <a href="https://lin.ee/naSUwaO">
          <img
            className="contact_line_img"
            src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
            alt="友だち追加"
          />
        </a>
      </div>

      {/* <div className="page4_tel w-full py-12 mt-12 text-white flex flex-col items-center">
        <h2 className="page4_h2">お電話でのお問い合わせ</h2>
        <a href="tel:0668438200">
          <h1 className="page4_h1 hover:bg-gray-500">06-6843-8200</h1>
        </a>
      </div> */}
    </Layout>
  );
}
