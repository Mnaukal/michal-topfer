class Node:
    def __init__(self, item):
        self.item = item
        self.next = None

def create(from_list):
    first = Node(from_list[0])
    node = first
    
    for i in from_list[1:]:
        new = Node(i)
        node.next = new
        node = new

    return first

def print_list(node):
    while node is not None:
        print(node.item, end="\n" if node.next is None else ", ")
        node = node.next

#####################################

def insert_into_sorted(node, item):
    
    if node is None:
        return Node(item)
    
    if item <= node.item:
        new = Node(item)
        new.next = node
        return new

    first = node
    while node is not None and item > node.item:
        previous = node
        node = node.next

    # previous.item < item < node.item
    new = Node(item)
    previous.next = new
    new.next = node

    return first

#####################################

def reverse_list(node):
    reversed = None
    while node is not None:
        next = node.next
        node.next = reversed
        reversed = node
        node = next
    return reversed

# https://favtutor.com/blogs/reverse-a-linked-list-cpp
def reverse_list_recursive(node):
    if node.next is None:
        return node
    
    head = node
    rest = node.next
    rest_reversed = reverse_list_recursive(rest)
    
    rest.next = head
    head.next = None

    return rest_reversed

#####################################

def merge(node1, node2):
    if node1 is None: return node2
    if node2 is None: return node1

    if node1.item <= node2.item:
        node = node1
        node1 = node1.next
    else:
        node = node2
        node2 = node2.next
    
    node.next = None
    first = node

    while node1 is not None and node2 is not None:
        if node1.item <= node2.item:
            node.next = node1
            node1 = node1.next
        else:
            node.next = node2
            node2 = node2.next
        
        node = node.next
        node.next = None

    if node1 is not None:
        node.next = node1
    else:
        node.next = node2
    
    return first

# https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/
def merge(node1, node2):
    dummy = Node(None)

    tail = dummy
    while True:
        if node1 is None:
            tail.next = node2
            break
        if node2 is None: 
            tail.next = node1
            break

        if node1.item <= node2.item:
            tail.next = node1
            node1 = node1.next
        else:
            tail.next = node2
            node2 = node2.next
        
        tail = tail.next
    
    return dummy.next

#####################################

if __name__ == '__main__':
    l = create([10, 20, 30])
    print_list(l)

    l = insert_into_sorted(l, 5)
    print_list(l)
    l = insert_into_sorted(l, 15)
    print_list(l)
    l = insert_into_sorted(l, 25)
    print_list(l)
    l = insert_into_sorted(l, 20)
    print_list(l)
    l = insert_into_sorted(l, 35)
    print_list(l)
    print()

    l = reverse_list(l)
    print_list(l)

    l = reverse_list_recursive(l)
    print_list(l)
    print()

    l2 = create([5, 6, 12, 16])
    m = merge(l, l2)
    print_list(m)
