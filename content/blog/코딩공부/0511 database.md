---
title: ' 🗃 DataBase를 알게되다.'
date: 2020-5-11 20:00:00
category: '코딩공부'
draft: false
---



# 1. 관계형 데이터베이스(RDBMS, Relational DataBase Management System)

데이터들은 2차원 테이블로 표현된다. 여기서 컬럼은 테이블의 각 항목을 말하고, 로우는 각 항목들의 실제 값들을 이야기 한다.

앞서 말한 것 과 같이 각 항목들의 실제 값을 Primary Key라고 하며, primary Key는 다른 항목에서 reference하게 된다.

테이블과 테이블을 연결할 때에는 Foreign Key라는 개념을 이용하여 주로 연결하게 된다.

이처럼 primary key와 foreign key를 이용하여 데이터를 관리하게 되면 중복된 데이터를 저장하지 않아 디스크를 효율적으로 관리하게 되고, 틀린 데이터들을 빠르게 찾고 쉽게 유지보수 할 수 있다. 이러한 것을 normalizaition이라고 한다.

