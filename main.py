import time
import sys
import threading
import keyboard
import os

os.system('cls')

event_queue = []
in_process = False

def system_heartbeat():
  sys.stdout.write(".")
  sys.stdout.flush()
  time.sleep(1)

def add_event():
  if keyboard.wait('enter'):
    try:
      time.sleep(0.1)
      user_input = input("\n[SHELL] Enter command: ")
      event_queue.append(user_input)
      time.sleep(0.3)

    except (KeyboardInterrupt, EOFError):
      return

def process_event(): 
    current_task = event_queue.pop(0)
    print(f"\n[KERNEL] Processing: {current_task}...")
    time.sleep(1)
    print("[KERNEL] Done.")
    return

def add_and_process_event():
  global in_process
  try:
      while True:
        keyboard.wait('tab')
        in_process = True
        time.sleep(0.1)
        user_input = input("\n[SHELL] Enter command: ").strip()
        event_queue.append(user_input)
        time.sleep(0.3)
        current_task = event_queue.pop(0)
        print(f"\n[KERNEL] Processing: {current_task}...")
        time.sleep(1)
        print("[KERNEL] Done.")
        in_process = False
    
  except (KeyboardInterrupt, EOFError):
    return

def boot_os():
  global in_process
  time.sleep(1)
  print("--- PIXELATED OS v0.1 ---")
  print("[KERNEL] Initializing...")
  time.sleep(1)
  print("[KERNEL] System Ready.")
  time.sleep(0.3)
  print("[KERNEL] Press Tab to Input")

  add_and_process_event_thread = threading.Thread(target=add_and_process_event, daemon=True)
  add_and_process_event_thread.start()

  try:
    while True:
      if not in_process:  
        system_heartbeat()
      else:
        time.sleep(0.1)
         
  except KeyboardInterrupt:
    print("\n[KERNEL] Powering Down...")
    time.sleep(3)

if __name__ == "__main__":
  boot_os()