import '../../../css/Welcome.css'
function InputPurple({typeInput, placeholderInput, typeBtn, valueBtn,
                                    btnBgColor, btnTextColor, inputBorder}) {
    return(
      
        <div class="input-group">
        <input 
            type={typeInput}
            placeholder={placeholderInput}
            class="input"
            id="Email" name="Email"
            autocomplete="off"
            style={{
                border: inputBorder,
                //não consegui mudar a cor do placeholder
            }}
            
            />
        <input
            typeBtn={typeBtn}
            value={valueBtn}
            class="button--submit"
            style={{
                backgroundColor: btnBgColor,
                color: btnTextColor,

                }} 


            
            />
    </div>  
    )
}

export default InputPurple;