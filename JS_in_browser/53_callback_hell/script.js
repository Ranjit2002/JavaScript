function loadScript(src, Callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with SRC: " + src);
        Callback(null, src);
    }
    script.onerror = function () {
        console.log("Error loading script with SRC: " + src);
        Callback(new Error("SRC got some error"));
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert(" Hello World! " + src)
}



loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src) {
    if (error) {
        console.log(error);
        SendEmergencyMessageToCEO();
        return;
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap2.bundle.min.js", function goodMorning(error, src) {
        if (error) {
            console.log(error);
            SendEmergencyMessageToCEO();
            return;
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap3.bundle.min.js", function goodMorning(error, src) {
            if (error) {
                console.log(error);
                SendEmergencyMessageToCEO();
                return;
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap4.bundle.min.js", function goodMorning(error, src) {
                if (error) {
                    console.log(error);
                    SendEmergencyMessageToCEO();
                    return;
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap5.bundle.min.js", function goodMorning(error, src) {
                    if (error) {
                        console.log(error);
                        SendEmergencyMessageToCEO();
                        return;
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap6.bundle.min.js", function goodMorning(error, src) {
                        if (error) {
                            console.log(error);
                            SendEmergencyMessageToCEO();
                            return;
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap7.bundle.min.js", function goodMorning(error, src) {
                            if (error) {
                                console.log(error);
                                SendEmergencyMessageToCEO();
                                return;
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap8.bundle.min.js", function goodMorning(error, src) {
                                if (error) {
                                    console.log(error);
                                    SendEmergencyMessageToCEO();
                                    return;
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap9.bundle.min.js", function goodMorning(error, src) {
                                    if (error) {
                                        console.log(error);
                                        SendEmergencyMessageToCEO();
                                        return;
                                    }
                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap2.bundle.min.js",)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

