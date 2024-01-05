from collections.abc import Iterator
from queue import Queue


NOT_VISITED = -1
OBSTACLE = -2


class ChessBoard:
    """
    self.board = contains the distances to the cells
        -1 = not visited
        -2 = obstacle
    """

    def __init__(self, board_size=8):
        self.board_size = board_size
        self.board = [[NOT_VISITED for _col in range(board_size)] for _row in range(board_size)]

    def add_obstacle(self, row, column):
        self.board[row][column] = OBSTACLE

    def get_distance(self, row, column):
        return self.board[row][column]

    def set_distance(self, row, column, distance):
        self.board[row][column] = distance

    def clear_distances(self):
        """Sets all cells (except for obstacles) to NOT_VISITED."""
        for row in range(self.board_size):
            for column in range(self.board_size):
                if self.get_distance(row, column) != OBSTACLE:
                    self.set_distance(row, column, NOT_VISITED)
        
    def get_neigbors(self, row, column) -> list[tuple[int, int]] | Iterator[tuple[int, int]]:
        """Returns a list (or generator) of neighbor cells (pairs of integers)."""
        # TODO: vraťte možné pohyby krále (8 sousedních políček šachovnice)
        return [(-1, -1)]
        
    def print(self):
        """Prints the distances of all cells in the chessboard."""
        for row in range(self.board_size):
            for column in range(self.board_size):
                print(f"{self.get_distance(row, column):>3}", end="")
            print()

    def bfs(self, start_row, start_column):
        self.clear_distances()  # this is only necessary if `bfs` is run multiple times

        queue = Queue()
        self.set_distance(start_row, start_column, 0)
        queue.put(...)  # TODO: přidejte startovní políčko do fronty

        while not queue.empty():
            ... = queue.get()  # TODO: načtěte políčko z fronty
            distance = self.get_distance(...)  # TODO: přečtěte vzdálenost aktuálního políčka

            for neighbor_cell in self.get_neigbors(...):  # TODO: projděte všechny sousedy aktuálního políčka
                # TODO: buď tady ověřte, že jste sousední políčko ještě nenavštívili, nebo z `get_neigbors` vracejte jen nenavštívené sousedy
                self.set_distance(...)  # TODO: nastavte vzdálenost pro souseda
                queue.put(...)  # TODO: přidejte souseda do fronty


def main():
    chess_board = ChessBoard()
    
    obstacle_count = int(input())
    for _ in range(obstacle_count):
        obstacle_row, obstacle_col = [int(i) - 1 for i in input().split()]
        chess_board.add_obstacle(obstacle_row, obstacle_col)


    start = [int(i) - 1 for i in input().split()]
    target = [int(i) - 1 for i in input().split()]

    chess_board.bfs(*start)

    # chess_board.print()  # uncomment for debugging

    print(chess_board.get_distance(*target))  # distance to the target position


if __name__ == '__main__':
    main()
