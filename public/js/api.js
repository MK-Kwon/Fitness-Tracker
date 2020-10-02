const API = {
    aync getLastWorkout() {
        let res;
        try {
            res = await fetch("/api/worouts");
        } catch(err) {
            console.log(err);
        }
    }
}