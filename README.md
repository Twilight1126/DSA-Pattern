# 🧠 DSA-Pattern

> My personal playground to upskill in Data Structures & Algorithms — understand the **pattern** behind every problem, and solve it using my own brain (hints allowed, AI not). Auto-synced from LeetCode via **LeetHub**.

<p align="center">
  <img src="https://img.shields.io/badge/Problems%20Solved-1-success?style=flat-square" alt="problems solved"/>
  <img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=flat-square" alt="language"/>
  <img src="https://img.shields.io/badge/Synced%20via-LeetHub-blueviolet?style=flat-square" alt="leethub"/>
  <img src="https://img.shields.io/badge/AI%20Assistance-Not%20Used-red?style=flat-square" alt="no ai"/>
</p>

---

## 📌 The Motive

This isn't just a solution dump — it's a training ground. The rules I follow:

- 🧩 **Brain first.** Every problem is attempted on my own before looking anything up.
- 💡 **Hints, not answers.** If stuck, I allow myself a hint (approach direction) — never a full solution, and **never AI-generated code.**
- 🐢 **Brute force is okay.** I solve it however I first can (even nested loops), get it accepted, *then* go back and optimize once I understand the better pattern.
- 🔁 **Pattern over problem.** The goal isn't "solve 300 problems," it's "recognize the 15 patterns that solve 300 problems."
- ⚙️ **Auto-synced.** Every accepted submission on LeetCode is pushed here automatically via the [LeetHub](https://github.com/arnav-kr/LeetHub) extension — so this repo is always a live, honest log of progress (including the messy first-attempt solutions).

---

## ⚙️ How This Repo Works

LeetHub auto-creates a folder for every solved problem, named `<problem-number>-<problem-slug>`, containing the accepted solution file (and notes, when added).

```
DSA-Pattern/
│
├── 0001-two-sum/
│   └── two-sum.js
│
├── 0002-<next-problem>/
│   └── ...
│
└── README.md
```

I don't reorganize these folders manually (LeetHub owns that structure) — instead, the **table below** is my manual index, tagging each solved problem with the pattern it actually belongs to. That's where the real learning gets tracked.

---

## 📊 Progress Tracker

| Pattern | Problems Solved | Status |
|---|---|---|
| Brute Force / Fundamentals | 1 | 🟡 In Progress |
| Two Pointers | 0 | 🔲 Not Started |
| Sliding Window | 0 | 🔲 Not Started |
| Hashing | 0 | 🔲 Not Started |
| Fast & Slow Pointers | 0 | 🔲 Not Started |
| Binary Search | 0 | 🔲 Not Started |
| DFS / BFS | 0 | 🔲 Not Started |
| Backtracking | 0 | 🔲 Not Started |
| Dynamic Programming | 0 | 🔲 Not Started |
| Greedy | 0 | 🔲 Not Started |
| Heap / Priority Queue | 0 | 🔲 Not Started |
| Graphs | 0 | 🔲 Not Started |
| Trie | 0 | 🔲 Not Started |
| Union Find | 0 | 🔲 Not Started |
| Bit Manipulation | 0 | 🔲 Not Started |
| **Total** | **1** | — |

> 🟡 = first solved but not yet optimized · ✅ = solved AND optimized to the best-known pattern approach

---

## 🗂️ Problem Log

| # | Problem | Difficulty | Pattern | Approach Used | LeetCode | Solution | Optimized? |
|---|---------|------------|---------|----------------|----------|----------|------------|
| 1 | Two Sum | Easy | Hashing (brute force used) | Nested loop — O(n²) | [Link](https://leetcode.com/problems/two-sum/) | [Code](./0001-two-sum/) | ❌ Not yet — revisit with hashmap for O(n) |

> New rows get added here as problems are solved, in addition to whatever LeetHub auto-commits.

---

## 🧠 Pattern Cheat Sheet

A quick reminder of *when* to reach for each pattern — useful before re-attacking a "not yet optimized" problem:

| Pattern | When to Use |
|---|---|
| **Hashing** | Need O(1) lookups — pairs, frequencies, duplicates (e.g. Two Sum) |
| **Two Pointers** | Sorted arrays, pair-sum problems, removing duplicates |
| **Sliding Window** | Subarray/substring problems with a contiguous range |
| **Fast & Slow Pointers** | Cycle detection, finding middle of linked list |
| **Binary Search** | Sorted data, or the "search space" can be halved |
| **DFS / BFS** | Trees, graphs, grid traversal, connected components |
| **Backtracking** | Generate all combinations/permutations, constraint satisfaction |
| **Dynamic Programming** | Overlapping subproblems, optimal substructure |
| **Greedy** | Local optimum leads to global optimum |
| **Heap / Priority Queue** | Kth largest/smallest, merging sorted streams |
| **Graphs** | Relationships/networks, shortest path, topological order |
| **Trie** | Prefix-based string search/autocomplete |
| **Union Find** | Connectivity, cycle detection in undirected graphs |
| **Bit Manipulation** | Subsets, XOR tricks, space-optimized state tracking |

---

## 🎯 Goals

- [x] Solve first problem (Two Sum — brute force)
- [ ] Go back and optimize Two Sum using a hashmap
- [ ] Cover every major pattern at least once
- [ ] Reach 50 problems solved
- [ ] Reach 100 problems solved
- [ ] Be able to identify the right pattern within 2 minutes of reading a new problem

---

## 🛠️ Tech

- **Language:** JavaScript
- **Sync:** [LeetHub](https://github.com/arnav-kr/LeetHub) (auto-pushes accepted LeetCode submissions to this repo)
- **Editor:** LeetCode in-browser editor → auto-committed here

---

⭐ This repo isn't optimized for showing off polished solutions — it's optimized for showing *honest* progress, including the brute-force first attempts. That's the whole point.

<!---LeetCode Topics Start-->
# LeetCode Topics
## Array
|  |
| ------- |
| [0001-two-sum](https://github.com/Twilight1126/DSA-Pattern/tree/master/0001-two-sum) |
| [0026-remove-duplicates-from-sorted-array](https://github.com/Twilight1126/DSA-Pattern/tree/master/0026-remove-duplicates-from-sorted-array) |
| [0027-remove-element](https://github.com/Twilight1126/DSA-Pattern/tree/master/0027-remove-element) |
| [0053-maximum-subarray](https://github.com/Twilight1126/DSA-Pattern/tree/master/0053-maximum-subarray) |
| [0066-plus-one](https://github.com/Twilight1126/DSA-Pattern/tree/master/0066-plus-one) |
| [0088-merge-sorted-array](https://github.com/Twilight1126/DSA-Pattern/tree/master/0088-merge-sorted-array) |
| [0121-best-time-to-buy-and-sell-stock](https://github.com/Twilight1126/DSA-Pattern/tree/master/0121-best-time-to-buy-and-sell-stock) |
| [0136-single-number](https://github.com/Twilight1126/DSA-Pattern/tree/master/0136-single-number) |
| [0169-majority-element](https://github.com/Twilight1126/DSA-Pattern/tree/master/0169-majority-element) |
| [0209-minimum-size-subarray-sum](https://github.com/Twilight1126/DSA-Pattern/tree/master/0209-minimum-size-subarray-sum) |
| [0217-contains-duplicate](https://github.com/Twilight1126/DSA-Pattern/tree/master/0217-contains-duplicate) |
| [0283-move-zeroes](https://github.com/Twilight1126/DSA-Pattern/tree/master/0283-move-zeroes) |
| [0643-maximum-average-subarray-i](https://github.com/Twilight1126/DSA-Pattern/tree/master/0643-maximum-average-subarray-i) |
| [0977-squares-of-a-sorted-array](https://github.com/Twilight1126/DSA-Pattern/tree/master/0977-squares-of-a-sorted-array) |
| [1773-count-items-matching-a-rule](https://github.com/Twilight1126/DSA-Pattern/tree/master/1773-count-items-matching-a-rule) |
## Hash Table
|  |
| ------- |
| [0001-two-sum](https://github.com/Twilight1126/DSA-Pattern/tree/master/0001-two-sum) |
| [0003-longest-substring-without-repeating-characters](https://github.com/Twilight1126/DSA-Pattern/tree/master/0003-longest-substring-without-repeating-characters) |
| [0013-roman-to-integer](https://github.com/Twilight1126/DSA-Pattern/tree/master/0013-roman-to-integer) |
| [0169-majority-element](https://github.com/Twilight1126/DSA-Pattern/tree/master/0169-majority-element) |
| [0217-contains-duplicate](https://github.com/Twilight1126/DSA-Pattern/tree/master/0217-contains-duplicate) |
| [0242-valid-anagram](https://github.com/Twilight1126/DSA-Pattern/tree/master/0242-valid-anagram) |
| [0383-ransom-note](https://github.com/Twilight1126/DSA-Pattern/tree/master/0383-ransom-note) |
## Sorting
|  |
| ------- |
| [0088-merge-sorted-array](https://github.com/Twilight1126/DSA-Pattern/tree/master/0088-merge-sorted-array) |
| [0169-majority-element](https://github.com/Twilight1126/DSA-Pattern/tree/master/0169-majority-element) |
| [0217-contains-duplicate](https://github.com/Twilight1126/DSA-Pattern/tree/master/0217-contains-duplicate) |
| [0242-valid-anagram](https://github.com/Twilight1126/DSA-Pattern/tree/master/0242-valid-anagram) |
| [0977-squares-of-a-sorted-array](https://github.com/Twilight1126/DSA-Pattern/tree/master/0977-squares-of-a-sorted-array) |
## Two Pointers
|  |
| ------- |
| [0026-remove-duplicates-from-sorted-array](https://github.com/Twilight1126/DSA-Pattern/tree/master/0026-remove-duplicates-from-sorted-array) |
| [0027-remove-element](https://github.com/Twilight1126/DSA-Pattern/tree/master/0027-remove-element) |
| [0028-find-the-index-of-the-first-occurrence-in-a-string](https://github.com/Twilight1126/DSA-Pattern/tree/master/0028-find-the-index-of-the-first-occurrence-in-a-string) |
| [0088-merge-sorted-array](https://github.com/Twilight1126/DSA-Pattern/tree/master/0088-merge-sorted-array) |
| [0283-move-zeroes](https://github.com/Twilight1126/DSA-Pattern/tree/master/0283-move-zeroes) |
| [0344-reverse-string](https://github.com/Twilight1126/DSA-Pattern/tree/master/0344-reverse-string) |
| [0977-squares-of-a-sorted-array](https://github.com/Twilight1126/DSA-Pattern/tree/master/0977-squares-of-a-sorted-array) |
## Dynamic Programming
|  |
| ------- |
| [0053-maximum-subarray](https://github.com/Twilight1126/DSA-Pattern/tree/master/0053-maximum-subarray) |
| [0121-best-time-to-buy-and-sell-stock](https://github.com/Twilight1126/DSA-Pattern/tree/master/0121-best-time-to-buy-and-sell-stock) |
## Divide and Conquer
|  |
| ------- |
| [0053-maximum-subarray](https://github.com/Twilight1126/DSA-Pattern/tree/master/0053-maximum-subarray) |
| [0169-majority-element](https://github.com/Twilight1126/DSA-Pattern/tree/master/0169-majority-element) |
## Counting
|  |
| ------- |
| [0169-majority-element](https://github.com/Twilight1126/DSA-Pattern/tree/master/0169-majority-element) |
| [0383-ransom-note](https://github.com/Twilight1126/DSA-Pattern/tree/master/0383-ransom-note) |
## String
|  |
| ------- |
| [0003-longest-substring-without-repeating-characters](https://github.com/Twilight1126/DSA-Pattern/tree/master/0003-longest-substring-without-repeating-characters) |
| [0013-roman-to-integer](https://github.com/Twilight1126/DSA-Pattern/tree/master/0013-roman-to-integer) |
| [0028-find-the-index-of-the-first-occurrence-in-a-string](https://github.com/Twilight1126/DSA-Pattern/tree/master/0028-find-the-index-of-the-first-occurrence-in-a-string) |
| [0242-valid-anagram](https://github.com/Twilight1126/DSA-Pattern/tree/master/0242-valid-anagram) |
| [0344-reverse-string](https://github.com/Twilight1126/DSA-Pattern/tree/master/0344-reverse-string) |
| [0383-ransom-note](https://github.com/Twilight1126/DSA-Pattern/tree/master/0383-ransom-note) |
| [0412-fizz-buzz](https://github.com/Twilight1126/DSA-Pattern/tree/master/0412-fizz-buzz) |
| [1773-count-items-matching-a-rule](https://github.com/Twilight1126/DSA-Pattern/tree/master/1773-count-items-matching-a-rule) |
## Math
|  |
| ------- |
| [0009-palindrome-number](https://github.com/Twilight1126/DSA-Pattern/tree/master/0009-palindrome-number) |
| [0013-roman-to-integer](https://github.com/Twilight1126/DSA-Pattern/tree/master/0013-roman-to-integer) |
| [0066-plus-one](https://github.com/Twilight1126/DSA-Pattern/tree/master/0066-plus-one) |
| [0412-fizz-buzz](https://github.com/Twilight1126/DSA-Pattern/tree/master/0412-fizz-buzz) |
## Simulation
|  |
| ------- |
| [0412-fizz-buzz](https://github.com/Twilight1126/DSA-Pattern/tree/master/0412-fizz-buzz) |
## Sliding Window
|  |
| ------- |
| [0003-longest-substring-without-repeating-characters](https://github.com/Twilight1126/DSA-Pattern/tree/master/0003-longest-substring-without-repeating-characters) |
| [0209-minimum-size-subarray-sum](https://github.com/Twilight1126/DSA-Pattern/tree/master/0209-minimum-size-subarray-sum) |
| [0643-maximum-average-subarray-i](https://github.com/Twilight1126/DSA-Pattern/tree/master/0643-maximum-average-subarray-i) |
## Binary Search
|  |
| ------- |
| [0209-minimum-size-subarray-sum](https://github.com/Twilight1126/DSA-Pattern/tree/master/0209-minimum-size-subarray-sum) |
## Prefix Sum
|  |
| ------- |
| [0209-minimum-size-subarray-sum](https://github.com/Twilight1126/DSA-Pattern/tree/master/0209-minimum-size-subarray-sum) |
## String Matching
|  |
| ------- |
| [0028-find-the-index-of-the-first-occurrence-in-a-string](https://github.com/Twilight1126/DSA-Pattern/tree/master/0028-find-the-index-of-the-first-occurrence-in-a-string) |
## Bit Manipulation
|  |
| ------- |
| [0136-single-number](https://github.com/Twilight1126/DSA-Pattern/tree/master/0136-single-number) |
<!---LeetCode Topics End-->