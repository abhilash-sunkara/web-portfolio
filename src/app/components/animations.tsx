export const slideFromBottom = {
    active: {
        y: 0,
        opacity : 1,
        transition : {
            ease: "easeInOut"
        }
    },
    hidden : {
        y: 100,
        opacity: 0
    }
}

export const slideFromTop = {
    active : {
        y: 0,
        opacity : 1,
    },
    hidden: {
        y: -100,
        opacity : 0
    } 
}

export const slideFromLeft = {
    active : {
        x: 0,
        opacity : 1,
        transition: {
            type : "spring",
            duration : 1.5
        }
    },
    hidden : {
        x: -100,
        opacity : 0
    }
}



export const scaleFromLeft = {
    active : {
        scale : 1,
        opacity : 1,
        position : "relative"
    },
    hidden : {
        scale: 0,
        opacity : 0,
        position : "absolute"
    }
}

export const shrinkVanish = {
    active : {
        scale : 1,
        opacity : 1,
    },
    hidden : {
        scale : 0,
        opacity : 0
    }
}