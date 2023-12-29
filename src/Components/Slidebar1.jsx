import styles from './Slidebar1.module.css'
const Slidebar1 = () =>{
    return(
        <div className={styles.container}>
            <h1>Generate more leads with a professional landing page!</h1>
            <div>
                <input type="email" name="email" id="email" placeholder='Email Address' />
                <button style={{minWidth:80, height:40, borderRadius:10, backgroundColor:'blue', color:'white', border:'none'}}>Submit</button>
            </div>
            
        </div>

    )
}

const Slidebar3 = ()=>{
    return(
        <>
        <div className={styles.container3}>
            <div className={styles.Mobilecontent3}>
               <h2>Fully Responsive Design</h2>
               <p style={{color:'gray', maxWidth:500}}>When you use a themecreated by Start Bootstrap. you know that the theme will look great on an device, weather it's a phone, tablet, or desktop the page will behave responsively!</p>
            </div>
            <div className={styles.image3}>
            </div>
        </div>
        </>
    )
}
const Slidebar4 = ()=>{
    return(
        <>
        <div className={styles.container3}>
            <div className={styles.image4}>
            </div>
            <div className={styles.Mobilecontent4}>
               <h2>Updated for Bootstrap 5</h2>
               <p style={{color:'gray', maxWidth:500}}>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of these themes on Start bootstrap are now using Bootstrap 5!</p>
            </div>
        </div>
        </>
    )
}
const Slidebar5 = ()=>{
    return(
        <>
        <div className={styles.container3}>
            <div className={styles.Mobilecontent5}>
               <h2>Easy to Use & Customize</h2>
               <p style={{color:'gray', maxWidth:500}}>Landing page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add youe content and images, and your new landing page will be ready to go!</p>
            </div>
            <div className={styles.image5}>
            </div>
        </div>
        </>
    )
}
const Slidebar6 = () =>{
    return(
        <div className={styles.container}>
            <h1>Ready to get started? Sign up now!</h1>
            <div>
                <input type="email" name="email" id="email" placeholder='Email Address' />
                <button style={{minWidth:80, height:40, borderRadius:10, backgroundColor:'blue', color:'white', border:'none'}}>Submit</button>
            </div>
            
        </div>

    )
}
export {Slidebar1, Slidebar3, Slidebar4, Slidebar5,Slidebar6}