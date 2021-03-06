const ListNode = require('../ListNode');
const chai = require('chai');
const expect = chai.expect;

describe('Linked List ListNode test', () => {
    let node, node2;
    it('should initialize a node', () => {
        node = new ListNode(1);
        expect(typeof node).to.equal('object');
        expect(node.value).to.equal(1);
        expect(node.next).to.be.null;
    });

    it('should create a second node that points to first', () => {
        node2 = new ListNode(2, node);
        expect(typeof node2).to.equal('object');
        expect(node2.value).to.equal(2);
        expect(typeof node2.next).to.equal('object');
        expect(node2.next.value).to.equal(1);
    });
});
