// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Items = () => {
    const data = [
        {
            heading: "Fully Responsive",
            para: "This theme will look great on any device, no matter the size!",
            url: "M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"
        },
        {
            heading: "Bootstrap 5 Ready",
            para: "Featuring the latest build of the new Bootstrap 5 framework!",
            url: "M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"
        },
        {
            heading: "Easy to Use",
            para: "Ready to use with your own content, or customize the source files!",
            url: "M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
        }
    ]
   return(
    <>
    <div style={{padding:30}}>
        <h1 style={{textAlign:"center",marginBottom:40}}>What people are saying..</h1>
        <div
        style={{display:"flex", justifyContent:"space-around", alignItems:"center", flexWrap: 'wrap'}}>

        {
            data.map((items, index)=>{
                const {heading,para,url} = items;
                return(
                    <div key={index} style={{textAlign:"center", padding:10}}>
                        {/* <img src={image} alt="" srcset="" style={{width:160, height:160, borderRadius:100}} /> */}
                        {/* <FontAwesomeIcon icon= "fa-brands fa-square-terminal" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="55" width="55" viewBox="0 0 576 512"><path d={url}/></svg>
                        <h2>{heading}</h2>
                        <p style={{maxWidth: 300}}>{para}</p>
                    </div>    
                )
            })
        }
        </div>
    </div>
    </>
   )
}
export default Items;

