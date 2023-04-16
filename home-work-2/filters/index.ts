const input = <HTMLInputElement>document.querySelector('#fileInput');
const canvas =  <HTMLCanvasElement>document.querySelector('#canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
const image = new Image();

canvas.width = 1000;
canvas.height = 1200;


let initialImageData = {} as ImageData;

input.addEventListener('change', updateImageDisplay);

export function updateImageDisplay(){
    const file = input.files && input.files[0];

    if(file){
        const url = window.URL.createObjectURL(file);

        image.src = url;
    
        image.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0);
            const imgData= getImageData();
            initialImageData = imgData || {} as ImageData;
        };
    }

};

function getImageData(){
    if(!image.src) return
    return ctx.getImageData(0, 0, canvas.width, canvas.height)
}

function putImageData(imgData: ImageData){
    if(!image.src) return
    return ctx.putImageData(imgData, 0, 0);
}

export function onButtonGrey(){
    const imgData= getImageData() ;
    if(!imgData) return;
    
    if(initialImageData.data.toString() == imgData.data.toString()){
        for(let i=0; i<=imgData.data.length; i+=4){

            const grayColor = Math.ceil((imgData.data[i] + imgData.data[i+1] + imgData.data[i+2])/3);
    
            imgData.data[i] = grayColor;
            imgData.data[i+1] = grayColor;
            imgData.data[i+2] = grayColor;
        }
       
        putImageData(imgData);
    } else{
        putImageData(initialImageData);
    }

}

export function onButtonInverse(){
    const imgData= getImageData();
    if(!imgData) return;

    for(let i=0; i<=imgData.data.length; i+=4){
        imgData.data[i] = 255-imgData.data[i];
        imgData.data[i+1] = 255-imgData.data[i+1];
        imgData.data[i+2] = 255-imgData.data[i+2];
    }
   
    putImageData(imgData);
}