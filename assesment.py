import random
totalGames=0
totalWon=0
totalLoss=0
totalGuess=0

while True:
    print("*****Menu*****")
    print("1.Play Game")
    print("2.View Statistics")
    print("3.Exit")
    choice = input("Enter your choice:")
    if not choice.isdigit():
        print("Please enter a valid number.")
        continue
    choice=int(choice)
    if choice == 1:
        number=random.randint(1,100)
        attempts=5
        guessed=[]
        won=False
        print("Guess a number between 1 and 100.You have 5 attempts.")
        while attempts>0:
            guess=input("Enter your guess:")
            if not guess.isdigit():
                print("Please enter a valid number.")
                continue
            guess=int(guess)
            if guess<1 or guess>100:
                print("Please enter a number between 1 and 100.")
                continue
            if guess in guessed:
                print("You already guessed that number. Try again.")
                continue
            guessed.append(guess)
            totalGuess+=1       
            if guess==number:
                print("Congratulations! You guessed the number.")
                totalWon+=1
                won=True
                break
            elif guess<number:
                print("Too low!")       
            else:
                print("Too high!")  
            attempts-=1
            print(f"You have {attempts} attempts left.")
        if not won:
            print(f"Sorry, you've used all attempts.The number was {number}.")
            totalLoss+=1
        totalGames+=1
    elif choice == 2:
        print("*****Statistics*****")
        print(f"Total Games Played: {totalGames}")
        print(f"Total Games Won: {totalWon}")
        print(f"Total Games Lost: {totalLoss}")
        if totalGames>0:
            winPrecentage=(totalWon/totalGames)*100
            avgGuesses=totalGuess/totalGames
        else:
            winPrecentage=0
            avgGuesses=0
        print(f"Win Percentage: {winPrecentage}%")
        print(f"Average Guesses: {avgGuesses}")
    elif choice == 3:
        print("Exiting the game. Goodbye!")
        break
    else:
        print("Enter a valid choice number .")
        