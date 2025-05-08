
import React, { useState } from 'react';

const App: React.FC = () => {
  const [page, setPage] = useState(0);
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const handleDaftar = () => {
    if (nama && email && password) {
      setPage(1); // Menampilkan halaman konfirmasi setelah daftar
    } else {
      alert('Semua field harus diisi!');
    }
  };

  const handleLogin = () => {
    if (usernameLogin && passwordLogin) {
      setPage(3); // Menampilkan halaman welcome setelah login
    } else {
      alert('Username dan Password harus diisi!');
    }
  };

  const handleLogout = () => {
    // Reset semua data
    setNama('');
    setEmail('');
    setPassword('');
    setUsernameLogin('');
    setPasswordLogin('');
    setPage(0);
  };

  return (
    <div style={styles.container}>
      {/* Halaman Daftar */}
      {page === 0 && (
        <section style={{ ...styles.page, backgroundColor: '#4CAF50' }}>
          <h1 style={styles.title}>DAFTAR</h1>
          <input
            type="text"
            placeholder="Nama Lengkap"
            style={styles.input}
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={styles.buttonWhite} onClick={handleDaftar}>
            DAFTAR
          </button>
        </section>
      )}

      {/* Halaman Konfirmasi Daftar */}
      {page === 1 && (
        <section style={{ ...styles.page, backgroundColor: '#4CAF50', justifyContent: 'center' }}>
          <h1 style={styles.title}>Pendaftaran Berhasil</h1>
          <button style={styles.buttonWhite} onClick={() => setPage(2)}>Lanjut ke Login</button>
        </section>
      )}

      {/* Halaman Login */}
      {page === 2 && (
        <section style={{ ...styles.page, backgroundColor: '#fff' }}>
          <div style={styles.headerShape}>
            <div style={styles.circle} />
            <h1 style={styles.headerText}>LOGIN</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            style={styles.input}
            value={usernameLogin}
            onChange={(e) => setUsernameLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
          <button style={styles.buttonGreen} onClick={handleLogin}>
            LOGIN
          </button>
        </section>
      )}

      {/* Halaman Welcome */}
      {page === 3 && (
        <section style={{ ...styles.page, backgroundColor: '#fff', alignItems: 'center' }}>
          <div style={styles.welcomeOval}>
            <h1 style={{ color: '#fff', textAlign: 'center' }}>SELAMAT DATANG DI BIODATAKU</h1>
          </div>
          <button style={styles.buttonGreen} onClick={() => setPage(4)}>Lanjut</button>
        </section>
      )}

      {/* Halaman Biodata */}
      {page === 4 && (
        <section style={{ ...styles.page, backgroundColor: '#fff' }}>
          <div style={styles.headerShape}>
            <div style={styles.circle} />
            <h1 style={styles.headerText}>BIODATAKU</h1>
          </div>
          <div style={styles.profileContent}>
            <img
              src="https://via.placeholder.com/120"
              alt="Foto Profil"
              style={styles.profileImage}
            />
            <p><strong>Nama Lengkap:</strong> {nama}</p>
            <p><strong>No. Telepon:</strong> 087784900377</p>
            <p><strong>Alamat:</strong> Jl. bungbaruh kec, kadur</p>
            <p><strong>Status:</strong> mahasiswa</p>
            <button style={styles.buttonGreen} onClick={handleLogout}>
              KELUAR
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '360px',
    margin: '0 auto',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    minHeight: '600px',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: '24px',
    marginBottom: '20px',
  },
  input: {
    margin: '10px auto',
    padding: '10px',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  buttonWhite: {
    backgroundColor: 'white',
    color: '#4CAF50',
    border: '2px solid #4CAF50',
    padding: '10px',
    width: '80%',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  buttonGreen: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px',
    width: '80%',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  headerShape: {
    backgroundColor: '#4CAF50',
    height: '180px',
    borderBottomLeftRadius: '180px',
    borderBottomRightRadius: '180px',
    position: 'relative',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: '24px',
  },
  circle: {
    width: '30px',
    height: '30px',
    backgroundColor: 'white',
    borderRadius: '50%',
    position: 'absolute',
    top: '20px',
    left: '20px',
  },
  welcomeOval: {
    backgroundColor: '#4CAF50',
    width: '260px',
    height: '350px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px auto',
  },
  profileContent: {
    padding: '20px',
  },
  profileImage: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
};

export default App;

