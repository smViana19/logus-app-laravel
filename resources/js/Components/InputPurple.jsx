import '../../css/Welcome.css'
export default function InputPurple({typeInput, placeholderInput, typeBtn, valueBtn}) {
    return(
      
        <div class="input-group">
        <input 
            type={typeInput}
            placeholder={placeholderInput}
            class="input"
            id="Email" name="Email"
            autocomplete="off" />
        <input
            typeBtn={typeBtn}
            value={valueBtn}
            class="button--submit" 


            
            />
    </div>  
    )
}