# Navrhněte efektivní algoritmus, která zjistí průměrnou výšku stromu definovanou jako `součet_délek_všech_cest_z_kořene_do_listu / počet_listů`. Délka cesty je počet hran.


class Node:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

    def __repr__(self):
        return f"Node({self.value})"


def avg_depth(root):
    # TODO: implement
    return 0
    

if __name__ == "__main__":
    root = \
        Node(1, 
            Node(2, 
                Node(4,
                    None,
                    Node(8)
                ),
                Node(5,
                    Node(9),
                    None
                )
            ),
            Node(3, 
                Node(6),
                Node(7,
                    None,
                    Node(10, 
                        Node(11),
                        Node(12)
                    )
                )
            )
        )

    print(avg_depth(root))