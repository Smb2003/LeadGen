const Reviews = () => {
    const data = [
        {
            name: "Margaret E.",
            review: '"This is fantastic! Thanks so much guys!"',
            image: "/src/assets/img/testimonials-1.jpg"
        },
        {
            name: "Fred S.",
            review: '"Bootstrap is amazing. I have been using it to create lots of super nice landing pages."',
            image: "/src/assets/img/testimonials-2.jpg"
        },
        {
            name: "Sarah W.",
            review: '"Thanks so much for making these free resources available to us!"',
            image: "/src/assets/img/testimonials-3.jpg"
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
                const {name,review,image} = items;
                return(
                    <div key={index} style={{textAlign:"center", padding:10}}>
                        <img src={image} alt="" srcset="" style={{width:160, height:160, borderRadius:100}} />
                        <h2>{name}</h2>
                        <p style={{maxWidth: 300}}>{review}</p>
                    </div>    
                )
            })
        }
        </div>
    </div>
    </>
   )
}
export default Reviews;