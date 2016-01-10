# Ebalkalmazás
Alk. fejl. beadandó Episode I: Baljós Árnyak (mert valamiért Herokun nem megy)

## Követelményanalízis

1. Követelmények összegyűjtése: a nyújtandó szolgáltatások ismertetése rövid, szöveges leírásként, sokszor felsorolásként jelenik meg.
 * Funkcionális elvárások:
    * be lehessen jelentkezni az oldalra
    * legyen lehetőség új felhasználó regisztrációjára
    * lehessen listázni a kutyákat
    * lehessen listázni az eseményeket bejelentkezett felhasználóként
    * lehessen új eseményt rögzíteni már létező kutyához bejelentkezett felhasználóként
    * lehessen bejelentkezett felhasználónak kutyát törölni
    * lehessen bejelentkezett felhasználónak kutyát szerkeszteni
 * Nem funkcionális követelmények
    * tartalmazzon két modellt, egy-sok kapcsolatban
    * perzisztálás fájlba történjen
2. Használatieset-modell
  * Szerepkörök: 
    * látogató, olyan user, aki még nem jelentkezett be és/vagy nem regisztrált
    * felhasználó, aki már regisztrált és/vagy bejelentkezett
  * Használati eset diagram:
  * ![use case diagram](docs/usecase.jpg)
  * Folyamatok menete:
    * kutya rögzítése/szerkesztése
    * lépések
      1. a bejelentkezett felhasználó kilistázza a kutyákat
      2. kiválasztja a kutyát szerkesztésre
      3. a weboldal megjeleníti a szükséges szerkesztőfelületet
      4. a felhasználó módosítja a kívánt mezőket
      5. megnyomja a rögzítés gombot
      8. a rendszer elmenti a változtatásokat
    * kutya megjelenítése / esemény rögzítése
    * lépések
      1. a bejelentkezett felhasználó kilistázza a kutyákat
      2. kiválasztja a kutyát
      3. a weboldal megjeleníti az adott kutyához tartozó lapot, és a szerkesztőmezőket
      4. a felhasználó feltölti adatokkal a kívánt mezőket
      5. megnyomja a rögzítés gombot
      8. a rendszer elmenti a változtatásokat

## Tervezés

### 1. Architektúra terv

#### Oldaltérkép

##### Látogató

- Főoldal
- Kutyák listázása
- Belépés/Kilépés

##### Felhasználó

- Főoldal
- Kutyák listázása
   + kutya szerkesztése
     + új esemény rögzítése
   + kutya törlése
   + kutya rögzítése
- Események listázása
- Belépés/Kilépés
  
#### Végpontok

  * GET /: főoldal
  * GET /login: bejelentkező oldal
  * POST /login: bejelentkezési adatok felküldése
  * GET /dogs/list: kutyák listázása
  * GET /dogs/new: új kutya rögzítése
  * POST /dogs/new: új kutya rögzítése, adatok felküldése
  * GET /dogs/:id: kutya adatai, esemény rögzítése
  * POST /dogs/:id: kutya adatai, esemény rögzítése, esemény adatainak felküldése
  * POST /dogs/:id/edit: kutya adatainak szerkesztése
  * DELETE /dogs/:id: kutya törlése

### 2. Felhasználóifelület-modell
  * ![site Mockup](docs/mockup.jpg)

### 3. Osztálymodell
  * Adatmodell és adatbázisterv
  * ![data model](docs/nomnoml.png)
