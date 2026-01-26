def priority(operator):
    if operator == '+' or operator == '-':
        return 1
    if operator == '*' or operator == '/':
        return 2
    return 0

def postfix(exp):
    stack = []          
    postfix = []        
    i = 0
    while i < len(exp):
        ch = exp[i]
        if ch.isdigit():
            num = ""
            while i < len(exp) and exp[i].isdigit():
                num = num + exp[i]
                i = i + 1
            postfix.append(num)
            continue
        elif ch == '(':
            stack.append(ch)
        elif ch == ')':
            while stack and stack[-1] != '(':
                postfix.append(stack.pop())
            stack.pop()   
        elif ch == '+' or ch == '-' or ch == '*' or ch == '/':
            while stack and priority(stack[-1]) >= priority(ch):
                postfix.append(stack.pop())
            stack.append(ch)
        i = i + 1
    while stack:
        postfix.append(stack.pop())
    return postfix

def solve_postfix(postfix):
    stack = []
    for item in postfix:
        if item.isdigit():
            stack.append(int(item))
        else:
            value2 = stack.pop()
            value1 = stack.pop()
            if item == '+':
                stack.append(value1 + value2)
            elif item == '-':
                stack.append(value1 - value2)
            elif item == '*':
                stack.append(value1 * value2)
            elif item == '/':
                stack.append(value1 // value2)
    return stack[0]

infix_exp="((4+5)*10-(20-9))+10"
postfix_exp=postfix(infix_exp)
answer=solve_postfix(postfix_exp)
print("Postfix Expression:", " ".join(postfix_exp))
print("Final Answer:", answer)
