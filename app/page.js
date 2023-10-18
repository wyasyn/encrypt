"use client"
import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import Image from 'next/image';

export default function Home() {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [result, setResult] = useState('');

  const encryptMessage = () => {
    const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
    setResult(`Encrypted: ${encryptedMessage}`);
  };

  const decryptMessage = () => {
    const decryptedMessage = CryptoJS.AES.decrypt(result.split(' ')[1], key).toString(CryptoJS.enc.Utf8);
    setResult(`Decrypted: ${decryptedMessage}`);
  };

  const reset = () => {
    setMessage('');
    setKey('');
    setResult('');
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result.split(': ')[1]);
    }
  };

  return (
    <div className='container'>
      <div className='image'>
        <Image
        src='/icon.png'
        alt='logo'
        width={50}
        height={50}
         />
      </div>
      <h1>Encryption</h1>
      <div>
        <label>Enter your message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="4" />
      </div>
      <div>
        <label>Enter your private key:</label>
        <input type="password" value={key} onChange={(e) => setKey(e.target.value)} />
      </div>
      <div className='btns'>
      <button onClick={encryptMessage}>Encrypt</button>
      <button onClick={decryptMessage}>Decrypt</button>
      <button onClick={reset}>Reset</button>
      <button onClick={copyToClipboard}>Copy</button>
      </div>
      
      <div id="result">{result}</div>
    </div>
  );
}
