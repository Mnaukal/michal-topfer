"""Upravte implementaci fronty, aby v případě přeplnění vytvořila větší pole a prvky do něj překopírovala."""


class FrontaPole:
    """
    implementace ADT Fronta
    pomocí "cyklického" pole (pythonovského seznamu)
    """

    def __init__(self, kapacita):
        """
        vytvoří prázdnou frontu zadané kapacity
        """
        self.pole = [None] * kapacita
        self.kapacita = kapacita
        self.zacatek, self.pocet = 0, 0

    def enqueue(self, x):
        """
        vloží prvek x na konec fronty
        je-li volné místo
        """
        if self.pocet == self.kapacita:
            # přeplněná fronta -> zvětšíme pole
            self.increase_capacity()
        self.pole[(self.zacatek + self.pocet) % self.kapacita] = x
        self.pocet += 1

    def increase_capacity(self):
        # TODO: místo vyhození výjimky sem doplňte vhodnou implementaci zvětšení kapacity
        raise NotImplementedError("Přeplněná fronta")

    def dequeue(self):
        """
        Odstraní a vrátí prvek ze začátku fronty
        je-li fronta neprázdná
        """
        if self.pocet == 0:
            raise IndexError("prázdná fronta")
        self.pocet -= 1
        x = self.pole[self.zacatek]
        self.zacatek = (self.zacatek + 1) % self.kapacita
        return x

    def __str__(self):
        """Vypíše prvky fronty (jako seznam)."""
        if self.zacatek + self.pocet <= self.kapacita:  # nepřetéká přes konec
            prvky = self.pole[self.zacatek:self.zacatek + self.pocet]
        else:
            prvky_od_konce = self.pole[self.zacatek:]
            prvky_od_zacatku = self.pole[:self.zacatek + self.pocet - self.kapacita]
            prvky = prvky_od_konce + prvky_od_zacatku
        return "Fronta: " + str(prvky)

    def __repr__(self):
        """Vypíše celé pole, kde je fronta uložena, a informaci, kde začínají a končí data."""
        return f"Fronta v poli: {self.pole}, začátek: {self.zacatek}, počet: {self.pocet}"


if __name__ == "__main__":
    # fronta s kapacitou 8
    f = FrontaPole(8)

    # přidáme 8 prvků
    for i in range(8):
        f.enqueue(i)
    print(f)

    # odebereme 4 prvky -> máme 4
    for i in range(4):
        f.dequeue()
    print(f)

    # přidáme další 2 -> máme 6
    for i in range(8, 10):
        f.enqueue(i)
    print(f)
    print(repr(f))

    # přidáme další 3 -> přeplněná fronta
    for i in range(10, 13):
        f.enqueue(i)
    print(f)
