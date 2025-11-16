# QA Engineer E2E Assignment

## Context

If you visit this [Sport live score at One](https://www.one.co.il/live/#.match.basketball) you will get an immediate overview
that contains matches of specific leagues, such as Euroleage, Israeli Footbal League, etc.

This interactive section is live and it's possible to drill down and view specific
team, player or a given match.

When you navigate through this widget HTTP requests will be sent to their servers.

## Target

Write automated e2e tests that focus on the **Israeli Football League**.
Produce a detailed report on the outcoming test.

### Requirements

1. Ensure that the list is up and showing.
2. Ensure that first HTTP request is getting sent and the second, which is
   subsequent to the first is getting cached.
3. Test the shape of this list, take into consideration the names of the teams,
   the result of the match, etc.
4. Notice that some matches are already played, some not yet played, and some of them
   prosponed or canceled due to reasons.

### Stats Requirements

1. Ensure that every match is actually associated to existing teams.
2. Ensure that the sorting of goals is DESC (-1) so the first is the player with the most goals.

## Limitations

1. Make sure that if the user clicks on some link it goes to a correct place.
2. Make sure that the page is visible correctly in mobile.
3. Be aware that after lots of requests One site may block your IP. Try to avoid this.
4. Write code in production level - ensure Suites, Stories, Documentation, reuse of code, etc.
5. Write in TypeScript Node.
6. You may install any module you like from npm registry.

## Bonus 1

Trace and test the HTTP Requests and provide a simple report of all requests that happened and their count.

## Bonus 2

Try to send multiple requests to the same destination and see if response coming from cache.
