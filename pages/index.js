import Head from 'next/head'
import Header from 'components/Header'
import styles from 'styles/Home.module.css'
import servicesStyles from 'styles/Services.module.css'
import cardServices from 'json/cardServices.json'
import boostStyles from 'styles/Boost.module.css'
import footerStyles from 'styles/Footer.module.css'
import socialMedia from 'json/socialMedia.json'
import Button from 'components/Button'
import ServicesCard from 'components/ServiceCard'
import ShorterLinks from 'components/ShorterLinks/index'
import ListOfLinks from 'components/ListOfLinks/index'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Shorter Links</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="container">
        {/* Header */}
        <Header />

        {/* Home */}
        <section className={styles.home}>
          <div className={styles.ilustationWorkingContainer}>
            <img src="/illustration-working.svg" className={styles.ilustationWorking} />
          </div>
          <div>
            <div className={styles.textHome}>
              <h1 className={styles.title}>More than just shorter links</h1>
              <p>Build your brands recognition and get detailed insights on how your links are performing</p>
            </div>
            <Button>Get Stared</Button>
          </div>
        </section>

        {/* Shorter links */}
        <ShorterLinks/>
      </div>
      <div className={styles.listOfLinks}>
        <div className="container">
          <ListOfLinks/>
        </div>
      </div>

      {/* Services */}
      <section className={servicesStyles.services}>
        <div className="container">
          <div className={servicesStyles.text}>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web whith our advanced statistics dashboard</p>
          </div>
          <div className={servicesStyles.cardsList}>
            {cardServices.map(({ icon, title, description }) => <section key={title}>
              <ServicesCard icon={icon} title={title} description={description} />
            </section>
            )}
          </div>
          <div className={servicesStyles.bar}></div>
        </div>
      </section>

      {/* Boost */}
      <section className={boostStyles.boost}>
        <h2>Boost your links today</h2>
        <Button>Get Stared</Button>
      </section>

      {/* Footer */}
      <footer className={footerStyles.footer}>
        <div className="container">
          <div className={footerStyles.footerGrid}>
          <h2>Shortly</h2>
          <div></div>
          <div className={footerStyles.section} >
            <h4>Features</h4>
            <p>Link Shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </div>

          <div className={footerStyles.section} >
            <h4>Resources</h4>
            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
          </div>

          <div className={footerStyles.section} >
            <h4>Company</h4>
            <p>About</p>
            <p>Our team</p>
            <p>Carrers</p>
            <p>Contact</p>
          </div>

          <div className={footerStyles.socialMedia}>
            {socialMedia.map(Rs => <img key={Rs.name} src={Rs.icon} alt={Rs.name} />)}
          </div>
          </div>
         </div>
      </footer>
    </div>
  )
}
