# import queue 
import threading
import time

# def putting_thread(q):
#   while True: 
#     print('starting thread')
#     time.sleep(5)
#     q.put(5)
#     print('put something')

# q = queue.Queue()
# t = threading.Thread(target = putting_thread, args = (q,), daemon = True)
# t.start()

# q.put(5) 

# print(q.get())
# print('first item gotten')

# print(q.get())
# print('finished')

# Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

# class Scheduler:
#     def __init__(self):
#         pass

#     def delay(self, f, n):
#         def sleep_then_call(n):
#             sleep(n / 1000)
#             f()
#         t = threading.Thread(target=sleep_then_call)
#         t.start()

# While this works, there is a huge problem with this method: we spin off a new thread each time we call delay!

class Scheduler:
    def __init__(self):
        self.fns = [] # tuple of (fn, time)
        self.t = threading.Thread(target=self.poll)
        self.t.start()

    def poll(self):
        while True:
            now = time.time() * 1000
            for fn, due in self.fns:
                if now > due:
                    fn()
            self.fns = [(fn, due) for (fn, due) in self.fns if due > now]
            time.sleep(0.01)

    def delay(self, f, n):
        self.fns.append([f, time.time() * 1000 + n])

def sayHello():
    print("Hello world!")

def sayBye():
  print("Bye world!")

scheduler = Scheduler()
scheduler.delay(sayHello, 1000)
scheduler.delay(sayBye, 5000)