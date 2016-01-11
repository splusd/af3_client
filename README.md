# Ebalkalmazás megvalósítása Ember JS és REST Api használatával
Alk. fejl. beadandó Episode III: A vizsgaidőszak bosszúja

## Követelményanalízis

1. Követelmények összegyűjtése:
 * Funkcionális elvárások:
    * lehessen listázni az eseményeket
    * lehessen listázni a kutyákat
    * lehessen új kutyát létrehozni
    * lehessen új eseményt rögzíteni már létező kutyához
    * lehessen eseményt törölni
    * lehessen eseményt szerkeszteni
 * Nem funkcionális követelmények
    * tartalmazzon két modellt, egy-sok kapcsolatban
    * perzisztálás fájlba, vagy adatbázisba történjen
2. Használatieset-modell
  * Szerepkörök: 
    * látogató, aki az oldalra tévedt
  * Használati eset diagram:
  * ![use case diagram](docs/usecase.jpg)
  * Folyamatok menete:
    * kutya/esemény rögzítése
    * lépések
      1. a látogató az új kutya/esemény gombra kattint
      2. a weboldal megjeleníti a szükséges szerkesztőfelületet
      3. a felhasználó módosítja a kívánt mezőket
      4. megnyomja a rögzítés gombot
      5. a rendszer elmenti a változtatásokat
    * kutya/esemény megjelenítése
    * lépések
      1. a látogató a Kutyatár / Események gombra kattint

## Tervezés

### 1. Architektúra terv

#### Oldaltérkép

##### Látogató

- Főoldal
- Kutyák listázása
- Események listázása
  + esemény szerkesztése
  + esemény törlése
- Új kutya rögzítése
- Új esemény rögzítése
  
#### Végpontok

  * GET /: főoldal
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
