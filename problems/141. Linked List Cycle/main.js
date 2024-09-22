141. Linked List Cycle

// Дан head заголовок связанного списка. Определите, есть ли в связанном списке цикл.

// Цикл в связанном списке есть, если в списке есть некоторый узел, к которому можно снова прийти, непрерывно следуя указателю next. Внутри pos используется для обозначения индекса узла, next к которому подключен указатель tail. Обратите внимание, что pos не передается как параметр.

// Верните, true если в связанном списке есть цикл. В противном случае верните false.


/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
};
