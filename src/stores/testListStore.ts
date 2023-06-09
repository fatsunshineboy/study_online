import { defineStore } from 'pinia'
import { onBeforeMount, ref } from 'vue'

export const useTestListStore = defineStore('testList', () => {
  let testList = ref([
    {
      lessonId: 1,
      testCount: 4,
      testSubject: [
        {
          title: '若有说明：int a=2, *p=&a, *q=p;,则以下非法的赋值语句是()。',
          options: ['p=q;', '*p=*q;', 'a=*q;', 'q=a;']
        },
        {
          title: '若定义：int a=511, *b=&a；,则printf("%d\n", *b);的输出结果为：',
          options: ['无确定值', 'a的地址', '512', '511']
        },
        {
          title:
            '若已定义int a=5; 下面对(1)、(2)两个语句的正确解释是()。\n(1) int *p=&a;\n(2) *p=a;',
          options: [
            '语句(1)和(2)中的*p含义相同,\n都表示给指针变量p赋值。',
            '(1)和(2)语句的执行结果,\n都是把变量a的地址值赋给指针变量p。',
            '(1)在对p进行说明的同时进行初始化,\n使p指向a；(2)变量a的值赋给指针变量p。',
            '(1)在对p进行说明的同时进行初始化,\n使p指向a；(2)将变量a的值赋予*p。'
          ]
        },
        {
          title: '若有说明：int *p, a=1, b; 以下正确的程序段是（）。',
          options: [
            'p=&b;\nscanf("%d", &p);',
            'scanf("%d", &b);\n*p=b;',
            'p=&b;\nscanf("%d",*p);',
            'p=&b;\n*p=a;'
          ]
        }
      ],
      testResult: ['d', 'd', 'd', 'b'],
      testAnalytical: [
        'a是整型数,\nint *p,*q定义了指针,\np,q是指向整型的指针。\np取得a的地址,而q取得p的地址\np,q是指针(也就是一个地址),而*p和*q是这个指针指向的整型数值(存放在这个地址的值)。\nA)	把q的地址赋给p,则p和q完全一样了,都指向一个数2\nB)	把q中数据个p\nC)	把q中数据给a\nD)	a中数据是2,不能够给一个地址。除非*q=a\n',
        'int a=511,*b=&a;\na 是整形变量\nb 是整形指针变量,指向 a\nprintf("%d\\n",*b);就是输出指针变量 b,\n所指变量的值输出结果511',
        'A:(1):*p,定义p为int类型指针\n(2):*p,表示p所指向的变量\n\nB(1):把变量a的地址赋给指针变量p\n(2):把变量a的值,赋值给P所指向的变量\n\nC前半句正确,后半句错误,\n(2):是把变量a的值赋值给P所指的变量。',
        'A,B中,p是b的地址,那么如果要输入b应该是scanf("%d", p);\n\nC中p还没定义,给*p赋值就是给一个没有开辟的地址赋值了\n\nD是正确的,意思是p为b的地址,将p地址上的数变成a,等价于b=a'
      ]
    },
    {
      lessonId: 2,
      testCount: 4,
      testSubject: [
        {
          title:
            '对于一个线性表，既要求能够进行较快速地插入和删除，又要求存储结构能反映数据之间的逻辑关系，则应该用()',
          options: ['顺序存储方式', '链式存储方式', '散列存储方式', '以上均可以']
        },
        {
          title:
            '对于一个头指针为 head的带头结点的单链表,判定该表为空表的条件是()；对于带头结点的单链表，判定空表的条件为()',
          options: ['head==NULL', 'head->next==NULL', 'head->next==head', 'head!=NULL']
        },
        {
          title:
            '在一个单链表中，已知 q 所指结点是p所指结点的前驱结点，若在q和p之间插入结点 s，则执行()',
          options: [
            's->next=p->next;p->next=s;',
            'p->next=s->next;s->next=p;',
            'q->next=s;s->next=p;',
            'p->next=s;s->next=q;'
          ]
        },
        {
          title: '单链表中，增加一个头结点的目的是()',
          options: [
            '使单链表至少有一个结点',
            '标识表结点中首结点的位置',
            '方便运算的实现',
            '说明单链表是线性表的链式存储'
          ]
        }
      ],
      testResult: ['b', 'b', 'c', 'c'],
      testAnalytical: [
        '首先直接排除 A 和 D。散列存储通过散列函数映射到物理空间，不能反映数据之间的逻辑关系，排除 C。链式存储能方便地表示各种逻辑关系，且插入和删除操作的时间复杂度为 o(1)。',
        '在带头结点的单链表中，头指针 head 指向头结点，头结点的 next 域指向第一个元素结点，head->next==NULL 表示该单链表为空。在不带头结点的单链表中，head 直接指向第一个元素结点，head==NULL 表示该单链表为空。',
        's 插入后，q成为 s 的前驱，而 p 成为 s 的后继，选 c。\n注意：可能会有读者认为选项C中的两条语句交换才正确。实际上，因为本题插入位置的前后结点都有指针指示（这与前面介绍的插入操作是不同的)，所以选项 C 中的语句顺序并不会造成断链。',
        '单链表设置头结点的目的是方便运算的实现，主要好处体现在：\n第一，有头结点后，插入和删除数据元素的算法就统一了，不再需要判断是否在第一个元素之前插入或删除第一个元素;\n第二，不论链表是否为空，其头指针是指向头结点的非空指针，链表的头指针不变，因此空表和非空表的处理也就统一了。'
      ]
    },
    {
      lessonId: 3,
      testCount: 4,
      testSubject: [
        {
          title: '顺序查找适合于存储结构为（）的线性表',
          options: ['顺序存储结构或链式存储结构', '散列存储结构', '索引存储结构', '压缩存储结构']
        },
        {
          title: '下列关于二分查找的叙述中，正确的是（）',
          options: [
            '表必须有序，表可以顺序方式存储，\n也可以链表方式存储',
            '表必须有序且表中数据必须是\n整型、实型或字符型',
            '表必须有序，而且只能从小到大排列',
            '表必须有序，且表只能以顺序方式存储'
          ]
        },
        {
          title: '若用冒泡排序算法对序列{10,14,26,29,41,52}从大到小排序，则需进行（）次比较',
          options: ['3', '10', '15', '25']
        },
        {
          title: '对同一待排序序列分别进行折半插入排序和直接插入排序，两者之间可能的不同之处是（）',
          options: ['排序的总趟数', '元素的移动次数', '使用辅助空间的数量', '元素之间的比较次数']
        }
      ],
      testResult: ['a', 'd', 'c', 'd'],
      testAnalytical: [
        '顺序查找是指从表的一端开始向另一端查找。它不要求查找表具有随机存取的特性，可以是顺序存储结构或链式存储结构。',
        '二分查找通过下标来定位中间位置元素，故应采用顺序存储，且二分查找能够进行的前提是查找表是有序的，但具体是从大到小还是从小到大的顺序则不做要求。',
        '冒泡排序始终在调整“逆序”，因此交换次数为排列中逆序的个数。对逆序序列进行冒泡排序，每个元素向后调整时都需要进行比较，因此共需要比较 5+4+3+2+1=15 次',
        '折半插入排序与直接插入排序都将待插入元素插入前面的有序子表，区别是：确定当前记录在前面有序子表中的位置时，直接插入排序采用顺序查找法，而折半插入排序采用折半查找法。排序的总趟数取决于元素个数 n，两者都是 n-1 趟。元素的移动次数都取决于初始序列，两者相同。使用辅助空间的数量也都是 O(1)。折半插入排序的比较次数与序列初态无关，为 O(nlog2n):而直接插入排序的比较次数与序列初态有关，为O(m)~-O(n2)。'
      ]
    }
  ])

  let undoList = ref([
    {
      lessonId: 1,
      undo: [false, false, false, false]
    },
    {
      lessonId: 2,
      undo: [false, false, false, false]
    },
    {
      lessonId: 3,
      undo: [false, false, false, false]
    }
  ])

  const changeUndoList = (lessonId: number, index: number) => {
    undoList.value.forEach((item) => {
      if (item.lessonId === lessonId) {
        item.undo[index - 1] = true
        localStorage.setItem('undoList', JSON.stringify(undoList.value))
      }
    })
  }

  onBeforeMount(() => {
    // 如果有
    if (localStorage.getItem('undoList')) {
      undoList.value = JSON.parse(localStorage.getItem('undoList') as string)
    }
    // 没有就初始化
    else {
      localStorage.setItem('undoList', JSON.stringify(undoList.value))
    }
  })

  return { testList, undoList, changeUndoList }
})
