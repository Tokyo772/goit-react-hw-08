import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import styles from "./AppBar.module.css";

export default function AppBar() {
  return (
    <div className={styles.appBar}>
      <div className={styles.navSection}>
        <Navigation />
      </div>
      <div className={styles.userMenu}>
        <UserMenu />
      </div>
      <div className={styles.authNav}>
        <AuthNav />
      </div>
    </div>
  );
}
