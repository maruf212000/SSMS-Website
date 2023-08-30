$(window).on("load resize", setHeightOfFooterContainer);
function setHeightOfFooterContainer() {
    var footer = document.getElementsByClassName('ft-container')[0];
    if (footer) {
        var footerContainer = document.getElementsByClassName('footer-container')[0];
        footerContainer.style.height = footer.offsetHeight + "px";
    }
}

const products = {
    'sifter' : {
        'name': 'Sifter',
        'img': 'VibroSifter.png',
    },
    'paste-kettle' : {
        'name': 'Paste Kettle',
        'img': 'Paste_Kettle.png',
    },
    'rapid-mixer-granulator' : {
        'name': 'Rapid Mixer Granulator',
        'img': 'RMG.png',
    },
    'mass-mixer' : {
        'name': 'Mass Mixer',
        'img': 'Mass_Mixer.png',
    },
    'fluid-bed-dryer' : {
        'name': 'Fluid Bed Dryer',
        'img': 'FBD.png',
    },
    'tray-dryer' : {
        'name': 'Tray Dryer',
        'img': 'tray-dryer.png',
    },
    'multi-mill' : {
        'name': 'Multi Mill',
        'img': 'Multi_Mill.png',
    },
    'co-mill' : {
        'name': 'Co-Mill',
        'img': 'Co-Mill.png',
    },
    'blender' : {
        'name': 'Blender',
        'img': 'octa_blender.png',
    },
    'coating-pan' : {
        'name': 'Coating Pan',
        'img': 'Coating_Pan.png',
    },
    'autocoater' : {
        'name': 'AutoCoater',
        'img': 'AutoCoater.png',
    },
    'colloid-mill' : {
        'name': 'Colloid Mill',
        'img': 'colloid_mill.png',
    },
    'dust-extractor' : {
        'name': 'Dust Extractor',
        'img': 'Dust_Extractor.png',
    },
    'de-duster' : {
        'name': 'De Duster',
        'img': 'De_Duster.png',
    },
}

function loadProducts() {
    // Get the swiper wrapper element
    const swiperWrapper = document.querySelector(".swiper-wrapper");

    // Loop through the products object and generate swiper slides
    for (const key in products) {
        const product = products[key];

        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");

        const slideContainer = document.createElement("div");
        slideContainer.classList.add("swiper-slide-container");

        const link = document.createElement("a");
        link.href = "index.html";

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("swiper-img-container");

        const img = document.createElement("img");
        img.src = 'img/Products/' + product.img;

        const details = document.createElement("div");
        details.classList.add("swiper-details");

        const bottomBorder = document.createElement("div");
        bottomBorder.classList.add("swiper-bottom-border");

        const title = document.createElement("h3");
        title.textContent = product.name;

        // Construct the elements
        imgContainer.appendChild(img);
        details.appendChild(title);
        link.appendChild(imgContainer);
        link.appendChild(details);
        link.appendChild(bottomBorder);
        slideContainer.appendChild(link);
        slide.appendChild(slideContainer);
        swiperWrapper.appendChild(slide);
    }
}