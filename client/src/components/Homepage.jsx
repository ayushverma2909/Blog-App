import styles from '../assets/Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Welcome to the Blog Editor App 🚀</h1>
        <p>
          This is a full-stack blog editor where you can write, auto-save drafts, and publish your thoughts.
        </p>
        <p>
          Use the navigation above or go to <strong>/editor</strong> to start writing your blog.
        </p>
        <div className={styles.info}>
          <p>✨ Auto-save every 30 seconds or after 5 seconds of inactivity</p>
          <p>🔐 Optional login with JWT (bonus feature)</p>
          <p>📚 View all drafts and published blogs anytime</p>
        </div>
        <footer className={styles.footer}>
          Made with 💙 for the Internship Assignment
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
