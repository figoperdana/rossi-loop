import LinkButton from "../Components/LinkButton";
import './Novelpage.css'

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
</style>

export default function Novelpage(){

    return(
    
<div className="Novelpage">
    <div className="body-header">
        <div className="image-novel">
            <img src='public\Cover Novel.jpg' alt='#' width={"180px"}/>
            <div className='text-header'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarddummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <div className="Link-btn">
                    <LinkButton variant='btn btn--filled'>Read Sinopsis</LinkButton>       
                    <LinkButton variant='btn btn--outline' href="https://www.nihbuatjajan.com/rossi_ramadhan/e/65d4114fd76624005060efeb" con='btn--image-icon'>Full read on NihBuatJajan <img src="public/external-link.png" width={"15px"}/>
                    </LinkButton>       
                </div>
            </div>      
        </div>
    </div>

        <div className="details">
        <h1>Ohter Novel</h1>
        <li className="Slider-Image"></li>
        <li className="Slider-Image"></li>
        <li className="Slider-Image"></li>
        </div>


    
</div>




    );
}