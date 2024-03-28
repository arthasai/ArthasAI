from backend.config import Settings
from backend.main import numbers

def test_numbers():
    assert numbers(5, 5) == 10