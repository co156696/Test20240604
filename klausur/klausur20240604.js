console.log("Klausur 20240604")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Varibalen mit sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) Berechnen Sie das Volumen eines Würfels mit Hilfe der Grundrechenoperatoren (+ , - , * , /) , bei dem die Kantenlänge mit der Varablen a festgelegt wird.
let a = 1
console.log("das volumen ist"+ (a*a*a));


// 1b) - Nur Klausurschreiber
// Wiederholen Sie die Berechnung mit Hilfe der Math-Bibliothek, indem Sie die bekannte Funktion .sqrt() verwenden.



console.log("Aufgabe 2")
// Für Kreise gilt:
// Flächeninhalt = Pi * Radius²
// Umfang = 2 * pi * Radius
// Durchmesser = 2 * Radius

let Radius= 2
 


// 2a)
// Testschreiber deklarieren pi und initialisieren pi mit dem Wert 3.14.
let pi = 3.14


// Klausurschreiber deklarieren pi und initialisieren pi mit dem Wert aus der bekannten Bibliothek namens Math. Geben Sie Math.PI an, um den Wert von Pi in einer Variablen speichern zu können.




// 2b)
// Berechnen Sie Flächeninhalt.
let Flächeninhalt = 3.14 * 2 * 2 
console.log("der Flächeninhalt ist"+ (3.14*2*2))




// 2c)
// Berechnen Sie den Umfang
let umfang = 2*3.14*2
console.log("der Umfang ist "+ (2*3.14*2))



// 2d)
// Berechnen Sie den Durchmesser
let Durchmesser = 2*2
 console.log("der Durchmesser ist " + (2*2))




console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Listenpreis einer Papierlieferung beträgt 16780,00 EUR; Rabatt 5 %, Mehrwertsteuer 19 %, Skonto 1,5 %.


// 3a)
// Berechnen Sie den Rabatt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.
let Rabatt =  16780*0.05/1
let listenpreis= 16780
let RabattProzentsatz= 0.05
console.log(" der Rabatt beträgt " + (16780*0.05/1))


// 3b)
// Berechnen Sie den Netto-Rechnungsbetrag in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.
let NettoRechnungsbetrag = 16780- Rabatt
console.log(" der NettoRechnungsbetrag beträgt " + (16780- Rabatt))


// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.
let MwSt = NettoRechnungsbetrag*0.19/1
let MwStProzentsatz = 0.19
console.log(" Die MwSt beträgt " + (NettoRechnungsbetrag*0.19/1))



// 3d) - Nur Klausurschreiber
// Berechnen Sie den Brutto-Rechnungsbetrag in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.




// 3e) - Nur Klausurschreiber
// Berechnen Sie den Skonto in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.




// 3f) - Nur Klausurschreiber
// Berechnen Sie den Zahlungsbetrag in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.



console.log("Aufgabe 4")

// Die Allgemeine Zinsformel lautet: Z = K * (p / 100) * ( t / 360)
// Z = Zinsbetrag
// K = Kapital
// p = Zinssatz (in Prozent)
// t = Verzinsungszeit (in Tagen)

// 4a)
// Ein Kunde nimmst bei einer Bank einen Kredit über 5000 € auf. Die Laufzeit beträgt 6 Monate bei einem Zinssatz von 10%. Berechne die Zinszahlungen, die in diesem Zeitraum anfallen. Arbeiten Sie mit Variablen. Antwortsatz!
k = 5000
t = 180
p = 0.1
console.log(" der zinsbetrag beträgt" + (5000*(0.1/100)* (180/360)))



// 4b) - Nur Klausurschreiber
// Am Jahresende erhält ein Kunde auf dem Sparbuch eine Zinsgutschrift über 500 €. Es befand sich aber lediglich für einen Zeitraum von 3 Monaten Geld auf dem Sparbuch. Der Zinssatz betrug 5%. Welche Geldsumme befand sich auf dem Sparbuch?








console.log("Aufgabe 5")

// Der Body-Mass-Index wird laut Wikipedia folgendermaßen berechnet:
// BMI = m / (l²)  
// wobei m die Körpermasse (in Kilogramm) und l die Körperlänge (in Metern) angibt. Der BMI wird also in der Maßeinheit kg/m² angegeben. 

// 5a)
// Erstellen Sie die notwendigen Variablen und weisen Sie beispielhaft Werte zu. 
// Erstellen Sie zusätzlich eine Variable für den Namen der Person.
let BMI = 68/ (1.7*1.7)
let körpermasse = 68
let Körperlänge = 1.70
console.log(" berechne den BMI von Pit");



// 5b)
// Führen Sie die Berechnung durch.
console.log(" Pit sein BMI beträgt " + (68/(1.7*1.7)));


// 5c) 
// Geben Sie den Antwortsatz nach folgendem Muster aus. Die Werte werden aus den Variablen und der vorherigen Berechnung erzeugt: "Pit hat bei einer Körpergröße von 170 cm und einem Körpergewicht von 68 kg einen BMI von 24."
console.log("Pit hat bei einer Größe von 1.7m und einem körpergewicht von 68KG einen BMI von 24" )



// 5d - Nur Klausurschreiber
// Interpretieren Sie das Ergebnis aus 7c nach folgender Vorgabe:
// Wenn der BMI zwischen 18,5 und 25 liegt, dann "Normalgewicht". Ansonsten "Untergewicht" oder "Übergewicht".
// Geben Sie eine entsprechende Rückmeldung auf der Konsole aus. Bsp: "Pit hat Normalgewicht." 
// Um die Aufgabe zu lösen, brauchen Sie die "Wenn-Funktion"
// Dazu ein erklärendes Beispiel:
// if (a > b) { console.log("A ist größer als B") }
// if (a <= b) { console.log("A ist kleiner als B oder gleich groß") }    


